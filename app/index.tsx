import { Redirect } from "expo-router";

export default function IndexPrivate() {
  return <Redirect href={"(public)/sign-in"} />;
}
