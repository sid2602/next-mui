import { Box, Typography } from "@mui/material";

export const Comp = () => {
	return (
		<Box sx={{ display: "flex", gap: { xs: "2rem", md: "6rem" } }}>
			<Typography sx={{ color: "text.secondary" }}>Comp</Typography>
			<Typography>Another</Typography>
		</Box>
	);
};
