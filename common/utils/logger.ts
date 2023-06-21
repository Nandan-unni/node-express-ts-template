export const logger = {
    data: (data: any, loc?: string) =>
      console.log(
        `🟢 log-data => ${loc ? `@${loc}:` : ``}${JSON.stringify(data)}`
      ),
    error: (error: any, loc?: string) =>
      console.log(
        `🔴 log-error => ${loc ? `@${loc}:` : ``}${JSON.stringify(error)}`
      ),
    info: (info: string, loc?: string) =>
      console.log(`🔵 log-info => ${loc ? `@${loc}: ` : ``}${info}`),
};
