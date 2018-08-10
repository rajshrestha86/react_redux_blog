import types from '../constants';
import reducer from '.';
import BlogListReducer from './blog_list';



describe('Test for Reducers.',()=>{



    describe('Initial State Test ', ()=>{

        const null_initial_state=[];

        it('Should render the initial state when no action passed',()=>{
            expect(BlogListReducer(undefined, {})).toEqual(null_initial_state);
        });
    

    })
    
});