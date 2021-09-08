var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [Krotov]","category":"page"},{"location":"api/#Krotov.KrotovResult","page":"API","title":"Krotov.KrotovResult","text":"Result object returned by optimize_pulses.\n\n\n\n\n\n","category":"type"},{"location":"api/#Krotov.optimize_pulses-Tuple{Any}","page":"API","title":"Krotov.optimize_pulses","text":"Use Krotov's method to optimize the given optimization problem.\n\nresult = optimize_pulses(problem)\n\noptimizes the control problem, see QuantumControlBase.ControlProblem.\n\nParameters are taken from the keyword arguments used in the instantiation of problem.\n\nRequired problem keyword arguments\n\nThe optimization functional is given implicitly via the mandatory problem keyword argument chi.\n\nOptional problem keyword arguments\n\nThe following problem keyword arguments are supported (with default values):\n\nsigma=nothing: Function that calculate the second-order contribution. If  not given, the first-order Krotov method is used.\niter_start=0: the initial iteration number\niter_stop=5000: the maximum iteration number\ncheck_convergence: a function to check whether convergence has been reached. Receives a KrotovResult object result, and should set result.converged to true and result.message to an appropriate string in case of convergence. Multiple convergence checks can be performed by chaining functions with ∘.\nprop_method=:auto: The propagation method to use\n\n\n\n\n\n","category":"method"},{"location":"api/#Krotov.print_table-Tuple{Any, Any}","page":"API","title":"Krotov.print_table","text":"Default info_hook\n\n\n\n\n\n","category":"method"},{"location":"examples/state_to_state_rwa/","page":"Example 2 (RWA)","title":"Example 2 (RWA)","text":"EditURL = \"https://github.com/QuantumControl-jl/Krotov.jl/blob/master/examples/state_to_state_rwa.jl\"","category":"page"},{"location":"examples/state_to_state_rwa/#Example-2:-Optimization-of-a-State-to-State-Transfer-in-a-Lambda-System-in-the-RWA","page":"Example 2 (RWA)","title":"Example 2: Optimization of a State-to-State Transfer in a Lambda System in the RWA","text":"","category":"section"},{"location":"examples/state_to_state_rwa/","page":"Example 2 (RWA)","title":"Example 2 (RWA)","text":"tip: Tip\nThis example is also available as a Jupyter notebook: state_to_state_rwa.ipynb","category":"page"},{"location":"examples/state_to_state_rwa/","page":"Example 2 (RWA)","title":"Example 2 (RWA)","text":"This example is illustrates the use of complex-valued control fields. This is accomplished by rewriting the Hamiltonian as the sum of two independent controls (real and imaginary parts). We consider a 3-level system in a Lambda configuration.","category":"page"},{"location":"examples/state_to_state_rwa/","page":"Example 2 (RWA)","title":"Example 2 (RWA)","text":"const σ̂_z = ComplexF64[1 0; 0 -1]\nconst σ̂_x = ComplexF64[0 1; 1  0]\n\n\n\"\"\"Two-level-system Hamiltonian.\"\"\"\nfunction hamiltonian(Ω=1.0, E0=0.2)\n\n    Ĥ₀ = -0.5 * Ω * σ̂_z\n    Ĥ₁ = σ̂_x\n\n    return [Ĥ₀, Ĥ₁]\n\nend","category":"page"},{"location":"examples/state_to_state_rwa/","page":"Example 2 (RWA)","title":"Example 2 (RWA)","text":"","category":"page"},{"location":"examples/state_to_state_rwa/","page":"Example 2 (RWA)","title":"Example 2 (RWA)","text":"This page was generated using Literate.jl.","category":"page"},{"location":"overview/#Overview","page":"Overview","title":"Overview","text":"","category":"section"},{"location":"examples/#Examples","page":"List of Examples","title":"Examples","text":"","category":"section"},{"location":"examples/","page":"List of Examples","title":"List of Examples","text":"Pages = [\n    \"simple_state_to_state.md\",\n    \"state_to_state_rwa.md\",\n]\nDepth = 1","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"EditURL = \"https://github.com/QuantumControl-jl/Krotov.jl/blob/master/examples/simple_state_to_state.jl\"","category":"page"},{"location":"examples/simple_state_to_state/#Example-1:-Optimization-of-a-State-to-State-Transfer-in-a-Two-Level-System","page":"Example 1 (TLS)","title":"Example 1: Optimization of a State-to-State Transfer in a Two-Level-System","text":"","category":"section"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"tip: Tip\nThis example is also available as a Jupyter notebook: simple_state_to_state.ipynb.Compare this example against the same example using the krotov Python package.","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"gdefop1hat1 gdefinittextinit gdeftgttexttgt","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"This first example illustrates the basic use of the Krotov.jl by solving a simple canonical optimization problem: the transfer of population in a two level system.","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"using QuantumPropagators\nusing QuantumControlBase\nusing Krotov\nusing LinearAlgebra","category":"page"},{"location":"examples/simple_state_to_state/#Two-level-Hamiltonian","page":"Example 1 (TLS)","title":"Two-level Hamiltonian","text":"","category":"section"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"We consider the Hamiltonian opH_0 = - fracomega2 opsigma_z, representing a simple qubit with energy level splitting omega in the basis ket0ket1. The control field epsilon(t) is assumed to couple via the Hamiltonian opH_1(t) = epsilon(t) opsigma_x to the qubit, i.e., the control field effectively drives transitions between both qubit states.","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"We we will use","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"ϵ(t) = 0.2 * flattop(t, T=5, t_rise=0.3, func=:blackman);\nnothing #hide","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"\"\"\"Two-level-system Hamiltonian.\"\"\"\nfunction hamiltonian(Ω=1.0, ϵ=ϵ)\n    σ̂_z = ComplexF64[1 0; 0 -1];\n    σ̂_x = ComplexF64[0 1; 1  0];\n    Ĥ₀ = -0.5 * Ω * σ̂_z\n    Ĥ₁ = σ̂_x\n    return (Ĥ₀, (Ĥ₁, ϵ))\nend\n;\nnothing #hide","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"H = hamiltonian();\nnothing #hide","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"The control field here switches on from zero at t=0 to it's maximum amplitude 0.2 within the time period 0.3 (the switch-on shape is half a Blackman pulse). It switches off again in the time period 0.3 before the final time T=5). We use a time grid with 500 time steps between 0 and T:","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"tlist = collect(range(0, 5, length=500));\nnothing #hide","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"using PyPlot\nmatplotlib.use(\"Agg\")\n\nfunction plot_control(pulse::Vector, tlist)\n    fig, ax = matplotlib.pyplot.subplots(figsize=(6, 3))\n    ax.plot(tlist, pulse)\n    ax.set_xlabel(\"time\")\n    ax.set_ylabel(\"amplitude\")\n    return fig\nend\n\nplot_control(ϵ::T, tlist) where T<:Function =\n    plot_control([ϵ(t) for t in tlist], tlist)\n\nplot_control(H[2][2], tlist)","category":"page"},{"location":"examples/simple_state_to_state/#Optimization-target","page":"Example 1 (TLS)","title":"Optimization target","text":"","category":"section"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"The krotov package requires the goal of the optimization to be described by a list of Objective instances. In this example, there is only a single objective: the state-to-state transfer from initial state ketPsi_init = ket0 to the target state ketPsi_tgt = ket1, under the dynamics of the Hamiltonian opH(t):","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"function ket(label)\n    result = Dict(\n        \"0\" => Vector{ComplexF64}([1, 0]),\n        \"1\" => Vector{ComplexF64}([0, 1]),\n    )\n    return result[string(label)]\nend\n;\nnothing #hide","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"objectives = [Objective(initial_state=ket(0), generator=H, target=ket(1))]","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"\"\"\"Krotov boundary conditions for the state-to-state functional.\"\"\"\nfunction chi_ss!(χ, ϕ, wrk)\n    N = length(wrk.objectives)\n    for k = 1:N\n        ϕₖ_tgt = wrk.objectives[k].target\n        ϕₖ = wrk.result.states[k]\n        τₖ = dot(ϕₖ_tgt, ϕₖ)\n        copyto!(χ[k], ϕₖ_tgt)\n        lmul!(τₖ, χ[k])\n    end\nend","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"\"\"\"State-to-state functional.\"\"\"\nfunction J_T_ss(ϕ, wrk)\n    N = length(ϕ)\n    F_ss = 0.0\n    for k = 1:N\n        ϕₖ_tgt = wrk.objectives[k].target\n        τₖ = dot(ϕₖ_tgt, ϕ[k])\n        F_ss += abs(τₖ)^2\n    end\n    return 1.0 - (F_ss / N)\nend","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"problem = ControlProblem(\n    objectives=objectives,\n    pulse_options=IdDict(\n        ϵ  => Dict(\n            :lambda_a => 5,\n            :update_shape => t -> flattop(t, T=5, t_rise=0.3, func=:blackman),\n        )\n    ),\n    tlist=tlist,\n    iter_stop=50,\n    chi=chi_ss!,\n    J_T=J_T_ss,\n    check_convergence= res -> begin (\n            (res.J_T < 1e-3)\n            && (res.converged = true)\n            && (res.message=\"J_T < 10⁻³\")\n        ) end\n);\nnothing #hide","category":"page"},{"location":"examples/simple_state_to_state/#Simulate-dynamics-under-the-guess-field","page":"Example 1 (TLS)","title":"Simulate dynamics under the guess field","text":"","category":"section"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"Before running the optimization procedure, we first simulate the dynamics under the guess field epsilon_0(t). The following solves equation of motion for the defined objective, which contains the initial state ketPsi_init and the Hamiltonian opH(t) defining its evolution.","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"guess_dynamics = propagate(\n        objectives[1], problem.tlist;\n        storage=true, observables=(Ψ->abs.(Ψ).^2, )\n)","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"function plot_population(pop0::Vector, pop1::Vector, tlist)\n    fig, ax = matplotlib.pyplot.subplots(figsize=(6, 3))\n    ax.plot(tlist, pop0, label=\"0\")\n    ax.plot(tlist, pop1, label=\"1\")\n    ax.legend()\n    ax.set_xlabel(\"time\")\n    ax.set_ylabel(\"population\")\n    return fig\nend\n\nplot_population(guess_dynamics[1,:], guess_dynamics[2,:], tlist)","category":"page"},{"location":"examples/simple_state_to_state/#Optimize","page":"Example 1 (TLS)","title":"Optimize","text":"","category":"section"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"In the following we optimize the guess field epsilon_0(t) such that the intended state-to-state transfer ketPsi_init rightarrow ketPsi_tgt is solved, via the krotov package's central optimize_pulses routine.  It requires, besides the previously defined objectives, information about the optimization functional J_T (implicitly, via chi_constructor, which calculates the states ketchi = fracJ_TbraPsi).","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"opt_result = optimize_pulses(problem);\nnothing #hide","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"opt_result","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"We can plot the optimized field:","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"plot_control(opt_result.optimized_controls[1], tlist)","category":"page"},{"location":"examples/simple_state_to_state/#Simulate-the-dynamics-under-the-optimized-field","page":"Example 1 (TLS)","title":"Simulate the dynamics under the optimized field","text":"","category":"section"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"Having obtained the optimized control field, we can simulate the dynamics to verify that the optimized field indeed drives the initial state ketPsi_init = ket0 to the desired target state ketPsi_tgt = ket1.","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"opt_dynamics = propagate(\n        objectives[1], problem.tlist;\n        controls_map=IdDict(ϵ  => opt_result.optimized_controls[1]),\n        storage=true, observables=(Ψ->abs.(Ψ).^2, )\n)","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"plot_population(opt_dynamics[1,:], opt_dynamics[2,:], tlist)","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"","category":"page"},{"location":"examples/simple_state_to_state/","page":"Example 1 (TLS)","title":"Example 1 (TLS)","text":"This page was generated using Literate.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Krotov","category":"page"},{"location":"#Krotov.jl","page":"Home","title":"Krotov.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Julia implementation of Krotov's method for quantum optimal control","category":"page"},{"location":"","page":"Home","title":"Home","text":"Krotov.jl is a port of the krotov Python package","category":"page"},{"location":"#Overview","page":"Home","title":"Overview","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"overview.md\",\n]\nDepth = 1","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"examples/simple_state_to_state.md\",\n    \"examples/state_to_state_rwa.md\",\n]\nDepth = 1","category":"page"},{"location":"#API","page":"Home","title":"API","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"api.md\",\n]\nDepth = 1","category":"page"}]
}
