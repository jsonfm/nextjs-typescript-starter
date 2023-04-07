import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector as useSelectorRedux,
} from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions } from '@/redux/actions';

export const useAction = () => {
    const dispatch = useDispatch<AppDispatch>();
    return bindActionCreators(actions, dispatch);
};

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
