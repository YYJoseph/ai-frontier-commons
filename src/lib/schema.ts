export type ResourceType =
  | "paper"
  | "repo"
  | "article"
  | "interview"
  | "podcast"
  | "course"
  | "teaching-video"
  | "documentation"
  | "framework"
  | "skill-plugin"
  | "tool"
  | "dataset"
  | "talk";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  url: string;
  source: string;
  summary: string;
  whyItMatters: string;
  topics: string[];
  difficulty: Difficulty;
  people?: string[];
  datePublished?: string;
  dateAdded: string;
  submittedBy?: string;
  status: "approved";
}

export interface TopicNode {
  id: string;
  title: string;
  summary: string;
  parentId?: string;
  prerequisites: string[];
  children: string[];
  featuredResourceIds: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  audience: string;
  summary: string;
  topicIds: string[];
  resourceIds: string[];
  stages?: {
    title: string;
    focus: string;
    connection: string;
    checkpoint?: string;
    topicIds: string[];
    resourceIds: string[];
  }[];
}
