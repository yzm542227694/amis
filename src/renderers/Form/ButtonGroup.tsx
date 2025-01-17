import React from 'react';
import cx from 'classnames';
import {
    OptionsControl,
    OptionsControlProps
} from './Options';
import {
    Button
} from '../../types';
import { getLevelFromClassName } from '../../utils/helper';

export interface ButtonGroupProps extends OptionsControlProps {
    buttons?: Array<Button>;
    btnLevel: string;
    btnActiveLevel: string;
    btnClassName: string;
    btnActiveClassName: string;
    vertical?: boolean;
};

export default class ButtonGroupControl extends React.Component<ButtonGroupProps, any> {
    static defaultProps:Partial<ButtonGroupProps> = {
        btnLevel: 'default',
        btnActiveLevel: 'primary',
        clearable: false,
        vertical: false
    }

    render(props = this.props) {
        const {
            render,
            classPrefix: ns,
            classnames: cx,
            className,
            disabled,
            options,
            value,
            placeholder,
            btnClassName,
            btnActiveClassName,
            onToggle,
            selectedOptions,
            buttons,
            size,
            block,
            vertical
        } = props;

        let body:Array<React.ReactNode> = [];
        let btnLevel = props.btnLevel;
        let btnActiveLevel = props.btnActiveLevel;

        btnClassName && (btnLevel = getLevelFromClassName(btnClassName));
        btnActiveClassName && (btnActiveLevel = getLevelFromClassName(btnActiveClassName));

        if (options && options.length) {
            body = options.map((option, key) => {
                const active = !!~selectedOptions.indexOf(option);
                return render(`option/${key}`, {
                    label: option.label,
                    icon: option.icon,
                    size: option.size || size,
                    type: 'button',
                    block: block,
                }, {
                    key: key,
                    active,
                    level: (active ? btnActiveLevel : '') || option.level || btnLevel,
                    className: cx(option.className, btnClassName),
                    disabled: option.disabled || disabled,
                    onClick: (e:React.UIEvent<any>) => {
                        onToggle(option);
                        e.preventDefault(); // 禁止 onAction 触发
                    }
                });
            });
        } else if (buttons) {
            body = buttons.map((button, key) => render(`button/${key}`, {
                size: size,
                block: block,
                activeLevel: btnActiveLevel,
                ...button
            }, {
                key
            }));
        }

        return (
            <div className={cx(`ButtonGroup`, {
                'ButtonGroup--block': block,
                'ButtonGroup--vertical': vertical,
                [`ButtonGroup--${size}`]: size
            }, className)}>
                {body.length ? body : <span className={`${ns}ButtonGroup-placeholder`}>{placeholder}</span>}
            </div>
        );
    }
}

@OptionsControl({
    type: 'button-group',
    sizeMutable: false
})
export class ButtonGroupControlRenderer extends ButtonGroupControl {
    render() {
        const {
            className,
            classnames: cx,
            ...rest
        } = this.props;

        const body = super.render({
            ...rest,
            classnames: cx
        });

        return (
            <div className={cx('ButtonGroupControl', className)}>
                {body}
            </div>
        )
    }
};

