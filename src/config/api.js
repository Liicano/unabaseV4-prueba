// const mainApi = "http://35.231.73.122:3000/";
// const mainApi = "http://localhost:3000/";
// const mainApi = "http://192.168.0.196:3000/";
// const mainApi = "https://unabase.net/";
const mainApi = "https://unabase.es/";

export default {
  auth: {
    google: `${mainApi}auth/google`,
    login: `${mainApi}auth/login`
  },
  users: {
    /**
     *  GET/  get doc list params: [name(STRING), isActive(boolean), ]
     *  GET/:id    get doc info
     */
    get: `${mainApi}users/`,
    /**
     * user or email: string
     * password: string
     */
    login: `${mainApi}users/login`,
    register: `${mainApi}users/register`,
    update: `${mainApi}users/update`,
    logout: `${mainApi}users/logout`
  },
  business: {},
  incomes: {
    /**
     *  GET/  get doc list params: [name(STRING), isActive(boolean)]
     *  GET/:id    get doc info
     *  POST/  create income
     */
    get: `${mainApi}incomes/`,
    /**
     * PATCH/
     * name: string
     */
    update: `${mainApi}incomes/update`
  }
};
