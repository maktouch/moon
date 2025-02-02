use moon_common::cacheable;
use moon_common::Id;
use proto_core::UnresolvedVersionSpec;
use rustc_hash::FxHashMap;
use schematic::Config;

cacheable!(
    #[derive(Clone, Config, Debug)]
    pub struct ProjectToolchainCommonToolConfig {
        pub version: Option<UnresolvedVersionSpec>,
    }
);

cacheable!(
    #[derive(Clone, Config, Debug)]
    pub struct ProjectToolchainTypeScriptConfig {
        pub disabled: bool,
        pub include_project_reference_sources: Option<bool>,
        pub include_shared_types: Option<bool>,
        pub route_out_dir_to_cache: Option<bool>,
        pub sync_project_references: Option<bool>,
        pub sync_project_references_to_paths: Option<bool>,
    }
);

cacheable!(
    #[derive(Clone, Config, Debug)]
    pub struct ProjectToolchainConfig {
        #[setting(nested)]
        pub bun: Option<ProjectToolchainCommonToolConfig>,

        #[setting(nested)]
        pub node: Option<ProjectToolchainCommonToolConfig>,

        #[setting(nested)]
        pub rust: Option<ProjectToolchainCommonToolConfig>,

        #[setting(nested)]
        pub typescript: Option<ProjectToolchainTypeScriptConfig>,
    }
);

impl ProjectToolchainConfig {
    pub fn is_typescript_enabled(&self) -> bool {
        self.typescript
            .as_ref()
            .map(|ts| !ts.disabled)
            .unwrap_or(true)
    }
}

cacheable!(
    #[derive(Clone, Config, Debug)]
    pub struct ProjectWorkspaceInheritedTasksConfig {
        pub exclude: Vec<Id>,

        // None = Include all
        // [] = Include none
        // [...] = Specific includes
        pub include: Option<Vec<Id>>,

        pub rename: FxHashMap<Id, Id>,
    }
);

cacheable!(
    #[derive(Clone, Config, Debug)]
    pub struct ProjectWorkspaceConfig {
        #[setting(nested)]
        pub inherited_tasks: ProjectWorkspaceInheritedTasksConfig,
    }
);
