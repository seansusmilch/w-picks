import classNames from 'classnames';
import styles from './picks-table.module.scss';

export type PicksTableProps = {
    className?: string;
    picks: {

    }
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PicksTable = ({ className }: PicksTableProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            PicksTable
            <table />
        </div>
    );
};
