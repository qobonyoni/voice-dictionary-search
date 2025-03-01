"use client";

export async function toggleFavourite(formData) {
	console.log(formData.get("fav"));

	localStorage.getItem("favouriteWords");
}
