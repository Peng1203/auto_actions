module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨  feat:      新功能'
    },
    {
      value: 'fix',
      name: '🐛  fix:       Bug修复'
    },
    {
      value: 'docs',
      name: '📝  docs:      文档新增/变更'
    },
    {
      value: 'style',
      name: '🎨  style:     代码风格调整'
    },
    {
      value: 'refactor',
      name: '🔨  refactor:  代码重构'
    },
    {
      value: 'perf',
      name: '⚡️  perf:      性能提升'
    },
    {
      value: 'test',
      name: '🧪  test:      测试用例添加/更正'
    },
    {
      value: 'revert',
      name: '⏪  revert:    代码回滚'
    },
    {
      value: 'build',
      name: '📦  build:     构建编译过程变更'
    },
    {
      value: 'chore',
      name: '🚀  chore:     日常任务维护'
    },
    {
      value: 'ci',
      name: '👷  ci:        自动化集成流程'
    }
  ],
  autoCommit: true,
  // usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // 覆盖消息，默认如下
  messages: {
    type: '请选择提交类型 (必填)',
    customScope: '请输入修改范围 (可选?)',
    // 如果 allowCustomScopes 为true则使用 (官方存在bug, 暂未修复)
    scope: '请选择修改范围 (可选?)',

    subject: '请简要描述提交 (必填)',
    body: '请输入详细描述 (可选?)',
    footer: '请输入要关闭的issue (可选?)',
    // breaking: '列出任何重大变更 (可选)',
    confirmCommit: '确定提交此说明吗？'
  },
  confirmCommit: true,
  skipScope: false,
  allowCustomScopes: false,
  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'], // 跳过您想要的任何问题
  subjectLimit: 72 // 限制主题长度
}