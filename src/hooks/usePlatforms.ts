import platforms from "../data/platforms";

interface Platfrom {
    id: number,
    name: string,
    slug: string;
}

const usePlatforms = () => ({ data: platforms, isLoading: false, error: null});

export default usePlatforms;