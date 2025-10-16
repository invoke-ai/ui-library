import { SystemStyleObject } from '@chakra-ui/styled-system';
import { MotionProps } from 'framer-motion';
type SliderMarkAnimationOptions = {
    initialFirstLast: MotionProps['initial'];
    initialOther: MotionProps['initial'];
    exitFirstLast: MotionProps['exit'];
    exitOther: MotionProps['exit'];
    animateFirstLast: MotionProps['animate'];
    animateOther: MotionProps['animate'];
    firstMarkStyle: SystemStyleObject;
    lastMarkStyle: SystemStyleObject;
};
export declare const sliderMarkStyles: SliderMarkAnimationOptions;
export {};
