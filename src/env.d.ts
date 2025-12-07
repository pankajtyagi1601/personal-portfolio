interface ImportMetaEnv {
  readonly VITE_SHOW_THEME_PICKER?: string;
  // add other VITE_* env vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
