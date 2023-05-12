type PageInfo = { pageNumber: number; isLastPage: boolean };

export type RootStackParamsList = {
	Home: undefined;
	FirstScreen: PageInfo;
	ListOfLocations: PageInfo;
	ListOfEpisodes: PageInfo;
};
