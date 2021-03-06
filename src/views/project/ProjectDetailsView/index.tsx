import { Box, Container, Divider, makeStyles } from '@material-ui/core';
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState
} from 'react';
import { useParams } from 'react-router';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Theme } from 'src/theme';
import { CampaignMock } from 'src/types/campaignmock';
import { Project } from 'src/types/project';
import axios from 'src/utils/axios';
import Activities from './Activities';
import Applicants from './Applicants';
import Header from './Header';
import Overview from './Overview';
import TabsIndex from './Overview/Tabs';
import Reviews from './Reviews';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const ProjectDetailsView: FC = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [currentTab, setCurrentTab] = useState<string>('overview');
  const [project, setProject] = useState<Project | null>(null);
  const [campaigns, setCampaigns] = useState<CampaignMock[] | null>(null);
  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  //@ts-ignore
  const { id } = useParams();

  const getProject = useCallback(async () => {
    try {
      const response = await axios.get<{ project: Project }>(
        '/api/projects/campaign/view'
      );

      if (isMountedRef.current) {
        setProject(response.data.project);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  const getCampaigns = useCallback(async () => {
    try {
      const response = await axios.get<{ campaigns: CampaignMock[] }>(
        '/api/campaigns'
      );

      if (isMountedRef.current) {
        setCampaigns(response.data.campaigns);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProject();

    getCampaigns();
  }, [getProject, getCampaigns]);

  if (!project || !campaigns) {
    return null;
  }

  return (
    <Page className={classes.root} title="Campaign Details">
      <Container maxWidth="lg">
        <Header project={project} campaign={campaigns[id]} />
        <Box mt={3}>
          {/* <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            textColor="secondary"
            value={currentTab}
            variant="scrollable"
          >
            {tabs.map(tab => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs> */}
          <TabsIndex
            handleTabsChange={handleTabsChange}
            currentTab={currentTab}
          />
        </Box>
        <Divider />
        <Box mt={3}>
          {currentTab === 'overview' && (
            <Overview
              project={project}
              campaign={campaigns[id]}
              handleTabsChange={handleTabsChange}
            />
          )}

          {currentTab === 'reviews' && <Reviews reviews={project.reviews} />}
          {currentTab === 'applicants' && (
            <Applicants
              applicants={project.applicants}
              author={project.author}
            />
          )}
          {currentTab === 'activity' && (
            <Activities activities={project.activities} />
          )}
        </Box>
      </Container>
    </Page>
  );
};

export default ProjectDetailsView;
