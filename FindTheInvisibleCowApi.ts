export default class FindTheInvisibleCowApi {
  async getGlobalPoints(): Promise<number> {
    return await this.makeRequest(false);
  }

  async incrementGlobalPoints(): Promise<number> {
    return await this.makeRequest(true);
  }

  private async makeRequest(increment: boolean): Promise<number> {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      const data = JSON.stringify({
        increment,
      });

      req.addEventListener("load", () => {
        try {
          const n = JSON.parse(req.responseText).count;
          if (n > 1.7e7 && n < 1e10) {
            resolve(n);
          } else {
            reject(new Error(`Unrealistic value: ${n}`));
          }
        } catch (e) {
          reject(e);
        }
      });

      req.addEventListener("error", () => reject(new Error("Request failed")));

      req.open(
        "POST",
        "https://1g26ewet37.execute-api.us-east-1.amazonaws.com/prod/count",
      );
      req.setRequestHeader("Content-Type", "application/json");

      req.send(data);
    });
  }
}
