import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './View/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
