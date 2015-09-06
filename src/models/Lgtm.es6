const toMarkdown = imageUrl => {
  return `[![LGTM](${imageUrl})](${imageUrl})`;
};

export class Lgtm {
  constructor({ imageUrl }) {
    this.imageUrl = imageUrl;
    this.createdAt = moment();
  }

  getMarkdown() {
    toMarkdown(this.imageUrl);
  }
};
