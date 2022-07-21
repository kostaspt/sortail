import sortClasses from './sortClasses'

it('should return the classes sorted', () => {
  const res = sortClasses('px-3 focus:hover:p-3 hover:p-1 py-3')
  expect(res).toEqual('px-3 py-3 hover:p-1 focus:hover:p-3')
})
