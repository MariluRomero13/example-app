// Las interfaces son parte de Typescript, la ventaja que esto nos ofrece es que nos permite asignar
// tipos de datos que luego JavaScriot transforma para que el navegador pueda interpretarlos
export interface IUser {
  id?: number;
  username: string;
  email: string;
  password?: string; // Al añadir un signo de interrogación, indicamos que el campo es opcional
  role_id: number;
  status?: boolean;
}
