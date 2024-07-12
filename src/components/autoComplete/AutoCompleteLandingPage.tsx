import AutoComplete from "./AutoComplete";
import List from "./List";

const AutoCompleteLandingPage = () => {
  const dataPromise = async (query: string, signal: any) => {
    return fetch(
      await `https://freetestapi.com/api/v1/movies?search=${query}`,
      { signal }
    );
  };

  return (
    <div>
      <AutoComplete
        id="auto-complete"
        name="auto-complete"
        placeholder="Search for movie"
        autocomplete={true}
        label="Search for movies"
        renderList={(list: any, activeIndex: number) => (
          <List items={list} activeIndex={activeIndex} />
        )}
        onSelect={() => {}}
        dataPromise={dataPromise}
        debounceWait={400}
        errorMessage={"Something has gone wrong"}
        emptyDataMessage={"No movie found with the given name"}
        maxItems={5}
      />
    </div>
  );
};

export default AutoCompleteLandingPage;
