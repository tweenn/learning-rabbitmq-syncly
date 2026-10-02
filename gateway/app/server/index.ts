import mount from './mount';
import listen from './listen';

export default () => {
	const Server = mount();
	listen(Server);
}
