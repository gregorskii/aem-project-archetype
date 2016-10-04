import ComponentRegistry from "aem-react-js/ComponentRegistry";
import Text from "./text/text";
import ReactParsys from "aem-react-js/component/ReactParsys";
import {Panel} from "./vanilla/Panel";

let registry: ComponentRegistry = new ComponentRegistry("${appsFolderName}/components/react");
registry.register(Text);
registry.register(ReactParsys);

registry.registerVanilla({component: Panel, parsysPath: "content", depth: 2});

export default registry;
