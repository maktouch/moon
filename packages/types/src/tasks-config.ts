// Automatically generated by schematic. DO NOT MODIFY!

/* eslint-disable */

export type PartialTaskArgs = null | string | string[];

export interface PartialTaskDependencyConfig {
	args?: PartialTaskArgs | null;
	env?: Record<string, string> | null;
	target?: string | null;
}

export type PartialTaskDependency = string | PartialTaskDependencyConfig;

export type TaskOptionAffectedFiles = boolean | 'args' | 'env';

export type TaskOptionEnvFile = boolean | string;

export type TaskMergeStrategy = 'append' | 'prepend' | 'replace';

export type TaskOutputStyle = 'buffer' | 'buffer-only-failure' | 'hash' | 'none' | 'stream';

export interface PartialTaskOptionsConfig {
	affectedFiles?: TaskOptionAffectedFiles | null;
	allowFailure?: boolean | null;
	cache?: boolean | null;
	envFile?: TaskOptionEnvFile | null;
	interactive?: boolean | null;
	mergeArgs?: TaskMergeStrategy | null;
	mergeDeps?: TaskMergeStrategy | null;
	mergeEnv?: TaskMergeStrategy | null;
	mergeInputs?: TaskMergeStrategy | null;
	mergeOutputs?: TaskMergeStrategy | null;
	outputStyle?: TaskOutputStyle | null;
	persistent?: boolean | null;
	retryCount?: number | null;
	runDepsInParallel?: boolean | null;
	runFromWorkspaceRoot?: boolean | null;
	runInCI?: boolean | null;
	shell?: boolean | null;
}

export type PlatformType = 'bun' | 'deno' | 'node' | 'rust' | 'system' | 'unknown';

export type TaskType = 'build' | 'run' | 'test';

export interface PartialTaskConfig {
	args?: PartialTaskArgs | null;
	command?: PartialTaskArgs | null;
	deps?: PartialTaskDependency[] | null;
	env?: Record<string, string> | null;
	extends?: string | null;
	inputs?: string[] | null;
	local?: boolean | null;
	options?: PartialTaskOptionsConfig | null;
	outputs?: string[] | null;
	platform?: PlatformType | null;
	type?: TaskType | null;
}

/** Docs: https://moonrepo.dev/docs/config/tasks */
export interface PartialInheritedTasksConfig {
	/** @default 'https://moonrepo.dev/schemas/tasks.json' */
	$schema?: string | null;
	extends?: string | null;
	fileGroups?: Record<string, string[]> | null;
	implicitDeps?: PartialTaskDependency[] | null;
	implicitInputs?: string[] | null;
	taskOptions?: PartialTaskOptionsConfig | null;
	tasks?: Record<string, PartialTaskConfig> | null;
}

export type TaskArgs = null | string | string[];

export interface TaskDependencyConfig {
	args: TaskArgs;
	env: Record<string, string>;
	target: string;
}

export type TaskDependency = string | TaskDependencyConfig;

export interface TaskOptionsConfig {
	affectedFiles: TaskOptionAffectedFiles | null;
	allowFailure: boolean | null;
	cache: boolean | null;
	envFile: TaskOptionEnvFile | null;
	interactive: boolean | null;
	mergeArgs: TaskMergeStrategy | null;
	mergeDeps: TaskMergeStrategy | null;
	mergeEnv: TaskMergeStrategy | null;
	mergeInputs: TaskMergeStrategy | null;
	mergeOutputs: TaskMergeStrategy | null;
	outputStyle: TaskOutputStyle | null;
	persistent: boolean | null;
	retryCount: number | null;
	runDepsInParallel: boolean | null;
	runFromWorkspaceRoot: boolean | null;
	runInCI: boolean | null;
	shell: boolean | null;
}

export interface TaskConfig {
	args: TaskArgs;
	command: TaskArgs;
	deps: TaskDependency[];
	env: Record<string, string>;
	extends: string | null;
	inputs: string[] | null;
	local: boolean | null;
	options: TaskOptionsConfig;
	outputs: string[] | null;
	platform: PlatformType;
	type: TaskType | null;
}

/** Docs: https://moonrepo.dev/docs/config/tasks */
export interface InheritedTasksConfig {
	/** @default 'https://moonrepo.dev/schemas/tasks.json' */
	$schema: string;
	extends: string | null;
	fileGroups: Record<string, string[]>;
	implicitDeps: TaskDependency[];
	implicitInputs: string[];
	taskOptions: TaskOptionsConfig | null;
	tasks: Record<string, TaskConfig>;
}
