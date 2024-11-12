import XLogo from '../../assets/x.svg?react';
import DiscordLogo from '../../assets/discord.svg?react';
import YoutubeLogo from '../../assets/youtube.svg?react';
import taskStyles from '../tasks/task.module.scss';

export interface SocialIconProps {
    name: 'x' | 'discord' | 'youtube';
}

export const SocialIcon = ({ name = 'youtube' }: SocialIconProps) => {
    return (
        <>
            {name === 'x' && (
                <a href="https://discord.com/channels/1047628695675863150" target="_blank">
                    <XLogo className={taskStyles.socialIcon} />
                </a>
            )}
            {name === 'discord' && (
                <a href="https://discord.com/channels/1047628695675863150" target="_blank">
                    <DiscordLogo className={taskStyles.socialIcon} />
                </a>
            )}
            {name === 'youtube' && (
                <a href="https://www.youtube.com/@CoduxIDE" target="_blank">
                    <YoutubeLogo className={taskStyles.socialIcon} />
                </a>
            )}
        </>
    );
};
