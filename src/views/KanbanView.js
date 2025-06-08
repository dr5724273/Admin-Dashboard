import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState } from 'react';

export default function KanbanView() {
  const [columns, setColumns] = useState({
    todo: { id: 'todo', title: 'To Do', items: [{ id: '1', content: 'Task 1' }] },
    doing: { id: 'doing', title: 'Doing', items: [{ id: '2', content: 'Task 2' }] },
    done: { id: 'done', title: 'Done', items: [{ id: '3', content: 'Task 3' }] },
  });

  function onDragEnd(result) {
    const { source, destination } = result;
    if (!destination) return;

    const colSource = columns[source.droppableId];
    const colDest = columns[destination.droppableId];
    const itemMoved = colSource.items[source.index];

    // Removing from source
    const newSourceItems = Array.from(colSource.items);
    newSourceItems.splice(source.index, 1);

    // Inserting into dest
    const newDestItems = Array.from(colDest.items);
    newDestItems.splice(destination.index, 0, itemMoved);

    setColumns({
      ...columns,
      [source.droppableId]: { ...colSource, items: newSourceItems },
      [destination.droppableId]: { ...colDest, items: newDestItems },
    });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex space-x-4">
        {Object.entries(columns).map(([colId, col]) => (
          <Droppable droppableId={colId} key={colId}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}
                className="bg-gray-100 dark:bg-gray-700 rounded p-3 w-60 space-y-2">
                <h2>{col.title}</h2>
                {col.items.map((item, i) => (
                  <Draggable key={item.id} draggableId={item.id} index={i}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                        className="bg-white dark:bg-gray-800 p-2 rounded shadow">
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
