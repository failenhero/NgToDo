import { ReverseTodoPipe } from './reverseTodo.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseTodoPipe();
    expect(pipe).toBeTruthy();
  });
});
