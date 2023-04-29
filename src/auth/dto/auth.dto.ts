//added a AuthDto interface to define the shape of the data that will be sent to the login route
export interface AuthDto {
  email: string;
  password: string;
}
