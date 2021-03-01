import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import generator from '@babel/generator'

const code = `let a = 'a'; let b = 'b'`
const ast = parse(code, { sourceType: 'module' })
console.log(ast)
