import interpolate from "./CryptoBlogEditorService";

describe('CyptoBlogEditorService tests', () => {

  it('should interpolate', async () => {
    expect(interpolate("a")).toEqual("a");
  });
});
