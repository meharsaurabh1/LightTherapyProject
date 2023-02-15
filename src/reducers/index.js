import{
    SET_SHOW_ALL_BLOGS,
    SET_SHOW_HOME_PAGE,
    SET_SHOW_PRODUCTS,
    SET_SHOW_BLOG,
    ADD_BLOGS,
    ADD_PRODUCTS,
    DISPLAY_BLOG,
    SET_COMMUNITY_PAGE,
    SET_SHOW_FORM,
    SET_SHOW_CENTRE,
    SET_SHOW_FULL_EXPERIENCE,
    DISPLAY_EXPERIENCE,
    FETCH_ALL,
    CREATE
} from '../actions';



const initialWebState = {
    blogs : [],
    products : [],
    fullBlog : {}, 
    showScreen :1,
    fullExperience: {},
};
export default function StateReducer(state = initialWebState, action){

    switch(action.type){
        case ADD_BLOGS:
            return{
                ...state,
                blogs : action.blogs,
            };
        
        case DISPLAY_BLOG:
            return{
                ...state,
                fullBlog : action.blog,
            };
        case DISPLAY_EXPERIENCE:
            return{
                ...state,
                fullExperience: action.review,
            }
        case ADD_PRODUCTS:
            return{
                ...state,
                products : action.products,
            };
        case SET_SHOW_ALL_BLOGS:
            return{
                ...state,
                showScreen: action.val,
            };
        case SET_SHOW_HOME_PAGE:
            return{
                ...state,
                showScreen:action.val,
            };
        case SET_SHOW_PRODUCTS:
            return {
                ...state,
                showScreen:action.val,
            };
        case SET_SHOW_BLOG:
            return {
                ...state,
                showScreen: action.val,
            };
        case SET_COMMUNITY_PAGE:
            return{
                ...state,
                showScreen: action.val,
            };
        case SET_SHOW_FORM:
            return{
                ...state,
                showScreen:action.val,
            };
        case SET_SHOW_CENTRE:
            
        return{
            ...state,
            showScreen: action.val,

        }
        case SET_SHOW_FULL_EXPERIENCE:
            return{
                ...state,
                showScreen: action.val,
            }
        case FETCH_ALL:
            return action.payload;
        
        case CREATE:
            return state;

        default:
            return state;
    }
}