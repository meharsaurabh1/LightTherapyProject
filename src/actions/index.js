
// ACTION TYPES
import * as api from '../api';
export const SET_SHOW_ALL_BLOGS = 'SET_SHOW_ALL_BLOGS';
export const SET_SHOW_HOME_PAGE = 'SET_SHOW_HOME_PAGE';
export const SET_SHOW_PRODUCTS = 'SET_SHOW_PRODUCTS';
export const SET_SHOW_BLOG = 'SET_SHOW_BLOG';
export const ADD_BLOGS = 'ADD_BLOGS';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const DISPLAY_BLOG = 'DISPLAY_BLOG';
export const SET_COMMUNITY_PAGE = 'SET_COMMUNITY_PAGE';
export const SET_SHOW_FORM = 'SET_SHOW_FORM';
export const SET_SHOW_CENTRE = 'SET_SHOW_CENTRE';
export const SET_SHOW_FULL_EXPERIENCE = 'SET_SHOW_FULL_EXPERIENCE';
export const DISPLAY_EXPERIENCE = 'DISPLAY_EXPERIENCE';
export const CREATE = 'CREATE';
export const FETCH_ALL = 'FETCH_ALL';



// ACTION CREATORS 

export const getReviews = () => async (dispatch) =>{
    try {
        const {data } = await api.fetchReviews();
        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}
export function setShowAllBlogs(val){
    return{
        type: SET_SHOW_ALL_BLOGS,
        val,
    };
}
export function displayBlog(blog){
    return{
        type: DISPLAY_BLOG,
        blog,
    };
}
export function addProducts(products){
    return{
        type: ADD_PRODUCTS,
        products,
    };
}
export function addblogs(blogs){
    return{
        type: ADD_BLOGS,
        blogs,
    };
}


export function setShowHomePage(val){
    return{
        type: SET_SHOW_HOME_PAGE,
        val,
    };
}

export function setShowProducts(val){
    return{
        type: SET_SHOW_PRODUCTS,
        val,
    };
}

export function setShowBlog(val){
    return{
        type: SET_SHOW_BLOG,
        val,
    };
}
export function setShowCentres(val){
    return{
        type: SET_SHOW_CENTRE,
        val,
    };
}

export function setCommunityPage(val){
    return{
        type: SET_COMMUNITY_PAGE,
        val
    };
}

export function setTakeExperience(val){
    return{
        type: SET_SHOW_FORM,
        val
    };
}

export function setShowFullExperience(val){
    return{
        type: SET_SHOW_FULL_EXPERIENCE,
        val
    };
}
export function displayExperience(review){
    return{
        type: DISPLAY_EXPERIENCE,
        review
    };
}
