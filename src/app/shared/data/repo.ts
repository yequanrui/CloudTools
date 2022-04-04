export interface IRepo {
  name: string; // 仓库名
  description: string; // 仓库描述
  visibility: string; // 仓库可见性
  language: string; // 仓库开发的主语言
  stargazers_count: number; // 仓库
  created_at: string;
  updated_at: string;
  archived: boolean;
  disabled: boolean;
}

export const CLIENT_ID = '6e717bdff804f697ed48';
export const CLIENT_SECRETS = '82bb036ac17f3bb9b82179cbaf57c7d7760b86c2';
