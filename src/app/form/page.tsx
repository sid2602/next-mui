"use client";

import { Box, Button, TextField } from "@mui/material";

export default function Form() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("SUBMIT");
	};

	return (
		<main>
			<Box
				component={"form"}
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
				onSubmit={handleSubmit}
			>
				<TextField label="Standard" variant="standard" />
				<TextField label="Standard" variant="standard" />
				<TextField label="Standard" variant="standard" />
				<Button variant="contained" type="submit">
					Submit
				</Button>
			</Box>
		</main>
	);
}
