import { Component, Vue, Prop} from "vue-property-decorator";

@Component({
    components: {
    }
})
export default class TccSection extends Vue {
    @Prop(Object) tcc: any;

    constructor(){
        super();
        
    }
}