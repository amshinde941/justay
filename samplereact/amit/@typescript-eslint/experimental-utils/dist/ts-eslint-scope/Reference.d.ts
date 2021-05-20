import { TSESTree } from '../ts-estree';
import { Scope } from './Scope';
import { Variable } from './Variable';
export declare type ReferenceFlag = 0x1 | 0x2 | 0x3;
interface Reference {
    identifier: TSESTree.Identifier;
    from: Scope;
    resolved: Variable | null;
    writeExpr: TSESTree.Node | null;
    init: boolean;
    partial: boolean;
    __maybeImplicitGlobal: boolean;
    tainted?: boolean;
    typeMode?: boolean;
    isWrite(): boolean;
    isRead(): boolean;
    isWriteOnly(): boolean;
    isReadOnly(): boolean;
    isReadWrite(): boolean;
}
declare const Reference: {
    new (identifier: TSESTree.Identifier, scope: Scope, flag?: 3 | 2 | 1 | undefined, writeExpr?: TSESTree.ArrayExpression | TSESTree.ArrayPattern | TSESTree.ArrowFunctionExpression | TSESTree.AssignmentExpression | TSESTree.AssignmentPattern | TSESTree.AwaitExpression | TSESTree.BigIntLiteral | TSESTree.BinaryExpression | TSESTree.BlockStatement | TSESTree.BreakStatement | TSESTree.CallExpression | TSESTree.CatchClause | TSESTree.ChainExpression | TSESTree.ClassBody | TSESTree.ClassDeclaration | TSESTree.ClassExpression | TSESTree.ClassPropertyComputedName | TSESTree.ClassPropertyNonComputedName | TSESTree.ConditionalExpression | TSESTree.ContinueStatement | TSESTree.DebuggerStatement | TSESTree.Decorator | TSESTree.DoWhileStatement | TSESTree.EmptyStatement | TSESTree.ExportAllDeclaration | TSESTree.ExportDefaultDeclaration | TSESTree.ExportNamedDeclaration | TSESTree.ExportSpecifier | TSESTree.ExpressionStatement | TSESTree.ForInStatement | TSESTree.ForOfStatement | TSESTree.ForStatement | TSESTree.FunctionDeclaration | TSESTree.FunctionExpression | TSESTree.Identifier | TSESTree.IfStatement | TSESTree.ImportDeclaration | TSESTree.ImportDefaultSpecifier | TSESTree.ImportExpression | TSESTree.ImportNamespaceSpecifier | TSESTree.ImportSpecifier | TSESTree.JSXAttribute | TSESTree.JSXClosingElement | TSESTree.JSXClosingFragment | TSESTree.JSXElement | TSESTree.JSXEmptyExpression | TSESTree.JSXExpressionContainer | TSESTree.JSXFragment | TSESTree.JSXIdentifier | TSESTree.JSXMemberExpression | TSESTree.JSXOpeningElement | TSESTree.JSXOpeningFragment | TSESTree.JSXSpreadAttribute | TSESTree.JSXSpreadChild | TSESTree.JSXText | TSESTree.LabeledStatement | TSESTree.BooleanLiteral | TSESTree.NumberLiteral | TSESTree.NullLiteral | TSESTree.RegExpLiteral | TSESTree.StringLiteral | TSESTree.LogicalExpression | TSESTree.MemberExpressionComputedName | TSESTree.MemberExpressionNonComputedName | TSESTree.MetaProperty | TSESTree.MethodDefinitionComputedName | TSESTree.MethodDefinitionNonComputedName | TSESTree.NewExpression | TSESTree.ObjectExpression | TSESTree.ObjectPattern | TSESTree.Program | TSESTree.PropertyComputedName | TSESTree.PropertyNonComputedName | TSESTree.RestElement | TSESTree.ReturnStatement | TSESTree.SequenceExpression | TSESTree.SpreadElement | TSESTree.Super | TSESTree.SwitchCase | TSESTree.SwitchStatement | TSESTree.TaggedTemplateExpression | TSESTree.TemplateElement | TSESTree.TemplateLiteral | TSESTree.ThisExpression | TSESTree.ThrowStatement | TSESTree.TryStatement | TSESTree.TSAbstractClassPropertyComputedName | TSESTree.TSAbstractClassPropertyNonComputedName | TSESTree.TSAbstractKeyword | TSESTree.TSAbstractMethodDefinitionComputedName | TSESTree.TSAbstractMethodDefinitionNonComputedName | TSESTree.TSAnyKeyword | TSESTree.TSArrayType | TSESTree.TSAsExpression | TSESTree.TSAsyncKeyword | TSESTree.TSBigIntKeyword | TSESTree.TSBooleanKeyword | TSESTree.TSCallSignatureDeclaration | TSESTree.TSClassImplements | TSESTree.TSConditionalType | TSESTree.TSConstructorType | TSESTree.TSConstructSignatureDeclaration | TSESTree.TSDeclareFunction | TSESTree.TSDeclareKeyword | TSESTree.TSEmptyBodyFunctionExpression | TSESTree.TSEnumDeclaration | TSESTree.TSEnumMemberComputedName | TSESTree.TSEnumMemberNonComputedName | TSESTree.TSExportAssignment | TSESTree.TSExportKeyword | TSESTree.TSExternalModuleReference | TSESTree.TSFunctionType | TSESTree.TSImportEqualsDeclaration | TSESTree.TSImportType | TSESTree.TSIndexedAccessType | TSESTree.TSIndexSignature | TSESTree.TSInferType | TSESTree.TSInterfaceBody | TSESTree.TSInterfaceDeclaration | TSESTree.TSInterfaceHeritage | TSESTree.TSIntersectionType | TSESTree.TSLiteralType | TSESTree.TSMappedType | TSESTree.TSMethodSignatureComputedName | TSESTree.TSMethodSignatureNonComputedName | TSESTree.TSModuleBlock | TSESTree.TSModuleDeclaration | TSESTree.TSNamedTupleMember | TSESTree.TSNamespaceExportDeclaration | TSESTree.TSNeverKeyword | TSESTree.TSNonNullExpression | TSESTree.TSNullKeyword | TSESTree.TSNumberKeyword | TSESTree.TSObjectKeyword | TSESTree.TSOptionalType | TSESTree.TSParameterProperty | TSESTree.TSParenthesizedType | TSESTree.TSPrivateKeyword | TSESTree.TSPropertySignatureComputedName | TSESTree.TSPropertySignatureNonComputedName | TSESTree.TSProtectedKeyword | TSESTree.TSPublicKeyword | TSESTree.TSQualifiedName | TSESTree.TSReadonlyKeyword | TSESTree.TSRestType | TSESTree.TSStaticKeyword | TSESTree.TSStringKeyword | TSESTree.TSSymbolKeyword | TSESTree.TSTemplateLiteralType | TSESTree.TSThisType | TSESTree.TSTupleType | TSESTree.TSTypeAliasDeclaration | TSESTree.TSTypeAnnotation | TSESTree.TSTypeAssertion | TSESTree.TSTypeLiteral | TSESTree.TSTypeOperator | TSESTree.TSTypeParameter | TSESTree.TSTypeParameterDeclaration | TSESTree.TSTypeParameterInstantiation | TSESTree.TSTypePredicate | TSESTree.TSTypeQuery | TSESTree.TSTypeReference | TSESTree.TSUndefinedKeyword | TSESTree.TSUnionType | TSESTree.TSUnknownKeyword | TSESTree.TSVoidKeyword | TSESTree.UnaryExpression | TSESTree.UpdateExpression | TSESTree.VariableDeclaration | TSESTree.VariableDeclarator | TSESTree.WhileStatement | TSESTree.WithStatement | TSESTree.YieldExpression | null | undefined, maybeImplicitGlobal?: boolean | undefined, partial?: boolean | undefined, init?: boolean | undefined): Reference;
    READ: 0x1;
    WRITE: 0x2;
    RW: 0x3;
};
export { Reference };
//# sourceMappingURL=Reference.d.ts.map