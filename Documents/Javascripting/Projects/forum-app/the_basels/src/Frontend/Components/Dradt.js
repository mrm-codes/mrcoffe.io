exports.createThread = [authMiddleware, async (req, res) => {
  try {
    const { title } = req.body;
    const user = await User.findByPk(req.user.id);
    console.log('User:', user);
    //Validating user
    if (!req.userId){
      return res.status(401).json({ message: 'Unauthorized: User not found' })
    }

    // Validate the input
    if (!title || title.trim().length === 0) {
      return res.status(400).json({ error: 'Title is required.' });
    }
 
    if (title.length > 255) {
      return res.status(400).json({ error: 'Title should be less than 255 characters.' });
    }

    
    // Create a new thread
    const thread = await Thread.create({ title, userId: req.user.id});

    // Send the response with status 201 (Created)
    res.status(201).json(thread);
  } catch (err) {
    // Check for validation error from Sequelize
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({ error: 'Validation error.' });
    }

    // General error response
    res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
}];

// --------------------------------------------------------------

const [newThread, setNewThread] = useState('');
 
// Create a Threads
const createThread = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) {
        console.error('Token not found');
        return;
    } else {
        console.log('Token:', token);
        console.log('User ID:', userId);

    }
    try {
        const response = await axios.post('http://localhost:3006/api/threads', {title: newThread, userId: userId},
            { headers: {'Authorization': `Bearer ${token}` }},
        );
        console.log('New Thread created', response.data);
        //setThreads([...threads, response.data]);
        setNewThread('');

    } catch (error) {
        console.error('Error creating thread', error);
    }
  };

   {/** 
            <div className='buttons'>
              <button 
                onClick={() => {
                  //setThreadId(thread.id);
                  //handleComments(thread.id);
                 // setActiveThreadId(thread.id);
                  
              }}><FaComment/></button>

              <button ><FaHeart/></button>
              <button ><FaHeartBroken/></button>

            </div> 
*/}
 {/* Posts 
            <div className='content'>
            <PostList 
              userId={userId}
              threadId={threadId}
              activeThreadId={activeThreadId} />
            </div>*/}