import sortClasses from './sortClasses'

it('should return the classes sorted', () => {
  const res = sortClasses('px-3 focus:hover:p-3 hover:p-1 py-3')
  expect(res).toEqual('px-3 py-3 hover:p-1 focus:hover:p-3')
})

it.each([' sm:px-2 px-2', 'sm:px-2 px-2 ', ' sm:px-2 px-2 ', '   sm:px-2    px-2    '])(
  'should trim surrounding spaces',
  (input) => {
    const res = sortClasses(input)
    expect(res).toEqual('px-2 sm:px-2')
  }
)
