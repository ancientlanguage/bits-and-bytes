import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';

interface RenderTree {
  id: string;
  name: string;
  children?: RenderTree[];
}

const data: RenderTree = {
  id: 'root',
  name: 'Cases',
  children: [
    {
      id: '1',
      name: 'Word',
      children: [
        {
          id: '4',
          name: 'Array [1-30] Letter',
          children: [
            {
              id: '10',
              name: 'Letter',
              children: [
                {
                  id: '11',
                  name: 'AND',
                  children: [
                    {
                      id: 'Greek Letter',
                      name: 'Greek Letter'
                    },
                    {
                      id: 'Diacritics',
                      name: 'Diacritics, OR:',
                      children: [
                        {
                          id: 'No diacritic',
                          name: 'No diacritic',
                        },
                        {
                          id: 'Smooth breathing',
                          name: 'Smooth breathing',
                        },
                        {
                          id: 'Rough breathing',
                          name: 'Rough breathing',
                        }
                      ]
                    },
                  ]
                }
              ]
            },
            {
              id: '4',
              name: 'Child - 8',
            },
            {
              id: '4',
              name: 'Child - 9',
            },
          ],
        },
        {
          id: '4',
          name: 'Child - 8',
        },
        {
          id: '4',
          name: 'Child - 9',
        },
      ],
    },
    {
      id: '3',
      name: 'OR Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
        {
          id: '4',
          name: 'Child - 5',
        },
        {
          id: '4',
          name: 'Child - 6',
        },
      ],
    },
  ],
};

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const StructureView = () => {
  const classes = useStyles();

  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
    </TreeView>
  );
}

export default StructureView;
