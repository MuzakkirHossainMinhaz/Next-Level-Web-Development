{
  // asynchronous typescript

  const getTodo = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();

    console.log(data);
  };

  getTodo();

  // createPromise - simulate
  type Something = { something: string };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something..." };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data!");
      }
    });
  };

  // calling createPromise function
  const showData = async () => {
    const data: Something = await createPromise();
    console.log(data);
  };

  showData();
}
