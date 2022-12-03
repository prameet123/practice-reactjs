import React, { Component } from "react";
import "../../App.css";
import "whatwg-fetch";
import DataTable from "react-data-table-component";
class Intro extends Component {
	state = {
		series: [],
	};
	listItem = [];
	componentDidMount() {
		fetch("https://api.tvmaze.com/search/shows?q=girls")
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				return this.setState({ series: json });
			});
	}
	render() {
		let data = [];
		let i = 1;
		for (const item of this.state.series) {
			data.push({
				id: i,
				title: item.show.name,
				language: item.show.language,
				rating: item.show.rating.average || "0.0",
			});
			i++;
		}
		/* const data = [
			{
				id: 1,
				title: "Beetlejuice",
				year: "1988",
			},
			{
				id: 2,
				title: "Ghostbusters",
				year: "1984",
			},
		]; */

		//console.log(data);
		const columns = [
			{
				name: "S.N",
				selector: (row) => row.id,
			},
			{
				name: "Title",
				selector: (row) => row.title,
			},
			{
				name: "Language",
				selector: (row) => row.language,
			},
			{
				name: "Rating",
				selector: (row) => row.rating,
			},
		];
		return (
			<div>
				<h1>List of searies</h1>
				<DataTable columns={columns} data={data} />
				{/* <h3>Number of series:{this.state.series.length}</h3>
				<ul>{item}</ul> */}
			</div>
		);
	}
}
export default Intro;
