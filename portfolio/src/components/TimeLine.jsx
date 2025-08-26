import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const TimeLine = ({ language }) => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: '#fbfaf5', color: '#0F2B3D' }}
        contentArrowStyle={{ borderRight: '7px solid  #fbfaf5' }}
        date="2025/04 - 2025/07"
        iconStyle={{ background: ' #85b1cf', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">
          {' '}
          {language === 'en' ? 'Learning frontend' : '雅思助教'}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          {' '}
          {language === 'en' ? 'Self-studying' : '文斯留学，杭州'}
        </h4>
        <p>
          {language === 'en' ? (
            'I am a passionate Frontend Developer, experienced in React, Tailwind CSS, and modern web technologies.'
          ) : (
            <>
              协助主讲老师进行课程准备与课堂管理，包括资料整理、课件辅助与作业批改。
              <br />
              针对学生的口语、写作作业提供反馈与改进建议，解答学习过程中的疑问。
              <br />
              协助组织和维护课堂秩序，跟进学生的学习进度与出勤情况。
            </>
          )}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: '#fbfaf5', color: '#0F2B3D' }}
        contentArrowStyle={{ borderRight: '7px solid  #fbfaf5' }}
        date="2024/05 - 2025/01"
        iconStyle={{ background: ' #85b1cf', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">
          {' '}
          {language === 'en' ? 'Sound Designer' : '声音设计师'}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          {' '}
          {language === 'en'
            ? 'waveform sound studio, UK'
            : 'waveform sound studio 英国'}
        </h4>
        <p>
          {language === 'en' ? (
            'I am a passionate Frontend Developer, experienced in React, Tailwind CSS, and modern web technologies.'
          ) : (
            <>
              使用音频软件制作和编辑音效、环境音及提示音。
              <br />
              对声音进行剪辑、混合和处理，确保符合项目需求与整体风格。
              <br />
              与美术、程序及策划团队沟通合作，使声音效果与视觉和交互体验保持一致。
            </>
          )}
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: '#fbfaf5', color: '#0F2B3D' }}
        contentArrowStyle={{ borderRight: '7px solid  #fbfaf5' }}
        date="2022/11 - 2023/06"
        iconStyle={{ background: ' #85b1cf', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">
          {' '}
          {language === 'en' ? 'Composer' : '作曲、编曲'}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          {' '}
          {language === 'en' ? 'Freelance' : '自由职业'}
        </h4>
        <p>
          {language === 'en' ? (
            'I am a passionate Frontend Developer, experienced in React, Tailwind CSS, and modern web technologies.'
          ) : (
            <>
              独立创作和编写各类纯音乐作品，包括旋律、和声与配器设计。
              <br />
              使用数字音频工作站完成音乐编曲、混音及母带处理。
              <br />
              以自由职业形式承接项目需求，与客户沟通并交付符合要求的音乐作品。
            </>
          )}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: '#fbfaf5', color: '#0F2B3D' }}
        contentArrowStyle={{ borderRight: '7px solid  #fbfaf5' }}
        date="2021 - 2022"
        iconStyle={{ background: ' #85b1cf', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">
          {language === 'en' ? 'MA in Music Management' : '音乐管理硕士'}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          {language === 'en'
            ? 'University of Sheffield, UK'
            : '谢菲尔德大学，英国'}
        </h4>
        <p>{language === 'en' ? 'GPA: Merit' : 'GPA: 优秀'}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: '#fbfaf5', color: '#0F2B3D' }}
        contentArrowStyle={{ borderRight: '7px solid  #fbfaf5' }}
        date="2017 - 2021"
        iconStyle={{ background: ' #85b1cf', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">
          {language === 'en' ? 'BA in Musicology' : '音乐学本科'}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          {language === 'en' ? 'Shandong University, China' : '山东大学'}
        </h4>
        <p>
          {language === 'en' ? (
            'GPA'
          ) : (
            <>
              GPA: 83/100 (年级前10%) <br />
              学业奖学金、创业奖学金、全国大学生计算机大赛原创音乐制作优秀奖
            </>
          )}
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLine;
