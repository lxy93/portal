const piniaPersistConfig = (key: string, paths?: string[]) => {
    return {
        key,
        storage: persistedState.sessionStorage,
        paths
    }
}
export default piniaPersistConfig