export const fakeDataResolver = (data: any) => {
  return new Promise<{ data: any }>((res) => {
    setTimeout(() => {
      res({ data });
    }, 1000);
  });
};
