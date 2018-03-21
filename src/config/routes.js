
import App from '../app'
import Search from '../components/Search/Search'
import Details from '../components/Details/Details'
import Video from '../components/VideoPlayerView/VideoPlayerView'
import Genres from '../components/Genres/Genres'
import EpisodesPicker from '../components/EpisodesPicker/EpisodesPicker'

const Routes = {
    Home: {
        screen: App, 
        navigationOptions: ({navigation}) => ({
            header: false
          })
    },
    Details: {
        screen: Details,
        navigationOptions: ({navigation}) => ({
            header: false
          })
    },
    Search: {
        screen: Search,
        navigationOptions: ({navigation}) => ({
            header: false
        })
    },
    Genres: {
        screen: Genres, 
        navigationOptions: ({navigation}) => ({
            header: false
        })
    },
    Video: {
        screen: Video,
        navigationOptions: ({navigation}) => ({
            header: false
        })
    },
    EpisodesPicker: {
        screen: EpisodesPicker,
        navigationOptions: ({navigation}) => ({
            header: false
        })
    }
}

export default Routes