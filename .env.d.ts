declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv extends Dict<string> {
        DOTENV_DUMMY: string;
      }
    }
  }
}
