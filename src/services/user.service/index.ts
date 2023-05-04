class UserService {
	login = async (email: string, password: string) => {
		// Do some request to the backend ...
		const user: User = {
			email: "email@example.com",
			username: "test",
			avatar: "https://www.feelcats.com/wp-content/uploads/2019/08/gatos-cheshire-alicia-pais-maravillas.jpg",
		};
		const token = "35v3443bn368367n306306wbn407qn420b436b4";
		const expiresIn = 3600;
		return { user, token, expiresIn };
	};
}

export const userService = new UserService();
