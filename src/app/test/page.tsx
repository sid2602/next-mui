import { Link, Typography } from "@mui/material";
import { default as NextLink } from "next/link";

export default function Test() {
	return (
		<main>
			<Typography>HIII</Typography>
			<Link href="/" component={NextLink}>
				Home
			</Link>
		</main>
	);
}
