import fs from "node:fs";

const topics = JSON.parse(fs.readFileSync("src/data/topics.json", "utf8"));
const resources = JSON.parse(fs.readFileSync("src/data/resources.json", "utf8"));
const paths = JSON.parse(fs.readFileSync("src/data/learning-paths.json", "utf8"));

const topicIds = new Set(topics.map((topic) => topic.id));
const resourceIds = new Set(resources.map((resource) => resource.id));
const allowedTypes = new Set(["paper", "repo", "article", "interview", "course", "tool", "dataset", "talk"]);
const allowedDifficulty = new Set(["beginner", "intermediate", "advanced"]);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertUniqueIds(items, label) {
  const seen = new Set();
  for (const item of items) {
    assert(!seen.has(item.id), `${label} id ${item.id} is duplicated`);
    seen.add(item.id);
  }
}

assertUniqueIds(topics, "Topic");
assertUniqueIds(resources, "Resource");
assertUniqueIds(paths, "Learning path");

for (const topic of topics) {
  assert(topic.id && topic.title && topic.summary, `Topic ${topic.id || "unknown"} is missing required fields`);
  for (const childId of topic.children || []) {
    assert(topicIds.has(childId), `Topic ${topic.id} references missing child ${childId}`);
  }
  for (const prerequisiteId of topic.prerequisites || []) {
    assert(topicIds.has(prerequisiteId), `Topic ${topic.id} references missing prerequisite ${prerequisiteId}`);
  }
  for (const resourceId of topic.featuredResourceIds || []) {
    assert(resourceIds.has(resourceId), `Topic ${topic.id} references missing resource ${resourceId}`);
  }
}

for (const resource of resources) {
  assert(resource.id && resource.title && resource.url, `Resource ${resource.id || "unknown"} is missing required fields`);
  assert(allowedTypes.has(resource.type), `Resource ${resource.id} has invalid type ${resource.type}`);
  assert(allowedDifficulty.has(resource.difficulty), `Resource ${resource.id} has invalid difficulty ${resource.difficulty}`);
  assert(resource.status === "approved", `Resource ${resource.id} must have approved status`);
  for (const topicId of resource.topics || []) {
    assert(topicIds.has(topicId), `Resource ${resource.id} references missing topic ${topicId}`);
  }
}

for (const path of paths) {
  assert(path.id && path.title && path.summary, `Learning path ${path.id || "unknown"} is missing required fields`);
  for (const topicId of path.topicIds || []) {
    assert(topicIds.has(topicId), `Learning path ${path.id} references missing topic ${topicId}`);
  }
  for (const resourceId of path.resourceIds || []) {
    assert(resourceIds.has(resourceId), `Learning path ${path.id} references missing resource ${resourceId}`);
  }
}

console.log(`Validated ${topics.length} topics, ${resources.length} resources, and ${paths.length} learning paths.`);
