interface TestInterface {
  title: string;
}

const logObj = (test: TestInterface) => {
  console.log(test.title);
};

logObj({ title: 'joint-todos' });